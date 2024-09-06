import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Dimensions,
    ScrollView,
    Image,
    Text
} from 'react-native';
import Page from '../components/page/default';
import MainHeader from '../components/header/main';
import ZipupRow from '../components/row/main'
import RowGroup from '../components/row/group';
import { useQuery } from '@apollo/client';
import { GetEventsDocument } from '../generated/graphql';


const DetailsScreen = () => {
    const { loading, error, data } = useQuery(GetEventsDocument);

    return (
        <Page>
            <MainHeader title="이미지"></MainHeader>

            <RowGroup
                data={data}
                titleKey="title"
                descriptionKey="description"></RowGroup>




        </Page>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    scrollView: {
        flexGrow: 1, // 스크롤 뷰 컨텐츠를 화면 전체에 맞춤
        justifyContent: 'flex-start', // 이미지를 수직 가운데 정렬
        backgroundColor: 'pink',
    },
    image: {
        alignSelf: 'center', // 이미지를 가로로 중앙 정렬
    },
});

export default DetailsScreen;