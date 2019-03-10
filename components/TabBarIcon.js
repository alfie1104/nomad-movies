import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

const TabBarIcon = ({ name, focused }) => <Ionicons name={name} color={focused ? ACTIVE_COLOR : INACTIVE_COLOR} size={26} />

TabBarIcon.propTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired
};

export default TabBarIcon;