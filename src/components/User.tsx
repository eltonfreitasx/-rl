import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default function User(){
    return(
        <View className="items-center">
            <Avatar className="w-32 h-32 border-4 border-gray-500">
                <AvatarImage source={{uri: "http://github.com/eltonfreitasx.png"}} />
                <AvatarFallback>X</AvatarFallback>
            </Avatar>
            <Text className="text-white font-bold text-2xl mt-4">
                    Elton Freitas
                </Text>
                <Text className="text-gray-400 text-lg">
                    eltonfreitasx
                </Text>
        </View>
    )
}