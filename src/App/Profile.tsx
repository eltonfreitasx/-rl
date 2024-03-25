import { Image, Text, View, ScrollView } from "react-native";
import User from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preference } from "@/components/Preference";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useToast } from "@/components/Toast";

export default function Profile() {
    function Alert(){
        alert("You saved!")
    }

    return (
        <View className="flex-1 bg-gray-700">
            <ScrollView>
                <Image
                    source={require("@/assets/banner.png")}
                    className="2-full h-52 -mb-16"
                />
                <View className="flex-1 px-4 pb-4">
                    <User />
                    <Skills />
                    <Preference />

                    <View className="w-full mt-6 flex-1">
                        <Input placeholder="Company" inputClasses="mb-6" label="Company" />
                        <Button label="Save" onPress={() => Alert()} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}