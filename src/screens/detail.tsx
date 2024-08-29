import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';
import CustomBottomSheet from '../components/customBottomSheet';

const DetailsScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const pressButton = () => {
        setModalVisible(true);
    }

    return (
        <View style={styles.rootContainer}>
            <Button
                title={"Open BottomSheet!"}
                onPress={pressButton}
            />
            <CustomBottomSheet
                handle={false}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Button
                        title={"Close BottomSheet!"}
                        onPress={() => setModalVisible(false)}
                    />
                </View>

            </CustomBottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default DetailsScreen;