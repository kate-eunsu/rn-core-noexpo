import React, { createContext, useContext, useRef, useMemo, useCallback, useState, useLayoutEffect } from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { LayoutChangeEvent, Text, TouchableOpacity, View } from 'react-native';

const BottomSheetContext = createContext<any>(null);

interface BottomSheetProviderProps {
    children: React.ReactNode;
}

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [snapPoints, setSnapPoints] = useState(['25%', '50%', '90%']);
    const [content, setContent] = useState<React.ReactNode | null>(null);
    const [contentHeight, setContentHeight] = useState(0);

    const openBottomSheet = useCallback(() => {
        bottomSheetRef.current?.snapToIndex(1);
    }, []);

    const closeBottomSheet = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);


    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                opacity={0.5}
            />
        ),
        []
    );


    const handleContentLayout = useCallback((event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        setContentHeight(height);
        if (height > 0) {
            setSnapPoints([`${height}px`]);
        }
    }, []);

    return (
        <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet, setContent }}>
            {children}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                onChange={(index) => {
                    if (index < 0) closeBottomSheet();
                }}
            >
                <View style={{ padding: 20 }} >
                    {content}
                    <TouchableOpacity onPress={closeBottomSheet} style={{ padding: 16, alignContent: 'center' }}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheet = () => {
    const context = useContext(BottomSheetContext);
    if (context === undefined) {
        throw new Error('useBottomSheet must be used within a BottomSheetProvider');
    }
    return context;
};