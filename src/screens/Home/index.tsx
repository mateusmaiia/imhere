import { StatusBar } from "expo-status-bar";
import { Participant } from "../../comoponents/Participant";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
  function handleAddParticipant() {
    if (participants.includes("Maia")) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com este nome."
      );
    }
    console.log("voce adicionou um novo partiicpante.");
  }
  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante", `Deseja remover o/a ${name}`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Deletado");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const [participants, setParticipants] = useState<string[]>([]);
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
