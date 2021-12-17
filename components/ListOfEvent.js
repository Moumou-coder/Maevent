import {useSelector} from "react-redux";
import React from 'react';
import {FlatList, Text, View} from "react-native";
import MyCard from "./MyCard";


export const ListOfEvent = props => {
    const eventArray = useSelector((getEvent) => getEvent.event.arrayState);
    const renderEvent = dataEvent => {
        return (
            <MyCard
                nav={props.nav}
                title={dataEvent.item.title}
                image={dataEvent.item.image}
                address={dataEvent.item.address}
                date={dataEvent.item.date}
                hours={dataEvent.item.hours}
                price={dataEvent.item.price}
                description={dataEvent.item.description}
            />
        );
    }

    return (
        <FlatList
            data={eventArray}
            renderItem={renderEvent}
            keyExtractor={(item,index)=>index.toString()}
        >
        </FlatList>
    );
}