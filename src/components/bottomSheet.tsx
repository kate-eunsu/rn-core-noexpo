import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
    bottomSheetVisible: boolean;
    setBottomSheetVisible: (visible: boolean) => void;
}


export default function BottomSheetComponent(
    { bottomSheetVisible = false, setBottomSheetVisible }: BottomSheetProps
) {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['17%', '50%', '90%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            console.log('handleSheetChanges', index);
            setBottomSheetVisible(false);
        }
    }, []);

    useEffect(() => {
        if (bottomSheetVisible) {
            bottomSheetRef.current?.snapToIndex(1); // 오픈
        } else {
            console.log('useEffect', bottomSheetVisible);
            bottomSheetRef.current?.close(); // 닫기
        }
    }, [bottomSheetVisible]);



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

    // renders
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1} // 처음에는 닫힌 상태
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
        >
            <View style={{ padding: 20 }}>
                <Text>This is the content inside the Bottom Sheet!</Text>
                <TouchableOpacity onPress={() => setBottomSheetVisible(false)}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>

    );
};