import { Text, View } from "react-native";
import { s } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import React from "react";
import { colors } from "@/styles/colors";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      <View style={s.details}>
        {Icon && <Icon size={32} color={colors.red.base} />}

        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
