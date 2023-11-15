import { Pressable, Text } from "react-native";
import { Link } from "expo-router";
import MeuBotao from "./MeuBotao";

export default function SeuBotao() {
  return (
    <Link href="/other" asChild>
      <Pressable>
        <MeuBotao nome={'testando'}/>
      </Pressable>
    </Link>
  );
}