import { createStackNavigator } from "react-navigation";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";

export const createStack = (screen, title) => createStackNavigator({
    Screen: {
        screen, //screen : screen과 동일. 즉 screen 값이 MoviesScreen이면 screen : MoviesScreen이 됨
        navigationOptions: {
            title,
            ...headerStyles
        }
    }
});

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: "white"
    },
    headerTintColor: TINT_COLOR
};