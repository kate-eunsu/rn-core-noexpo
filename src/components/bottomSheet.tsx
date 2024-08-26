// BottomSheet.tsx
import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface BottomSheetProps {
    bottomSheetVisible: boolean;
    setBottomSheetVisible: (visible: boolean) => void;
    modalText: string;
    buttonOpenText: string;
    buttonCloseText: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    bottomSheetVisible,
    setBottomSheetVisible,
    modalText,
    buttonOpenText,
    buttonCloseText,
}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={bottomSheetVisible}
                onRequestClose={() => {
                    setBottomSheetVisible(false);
                }}>
                <TouchableWithoutFeedback onPress={() => setBottomSheetVisible(false)}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{modalText}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setBottomSheetVisible(false)}>
                                    <Text style={styles.textStyle}>{buttonCloseText}</Text>
                                </Pressable>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경의 투명도 조절
    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default BottomSheet;
