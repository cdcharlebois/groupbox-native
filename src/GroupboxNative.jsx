import { Component, createElement, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
// import { HelloWorldSample } from "./components/HelloWorldSample";

export const GroupboxNative = props => {
    const { headerOpen, headerClosed, body } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <View>{headerOpen}</View> : <View>{headerClosed}</View>}
            </TouchableOpacity>
            <Collapsible collapsed={!isOpen} duration={100} align={"bottom"}>
                {body}
            </Collapsible>
        </View>
    );
};
GroupboxNative.displayName = "GroupboxNative";
