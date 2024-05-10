import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const navigation = useNavigation();
    const [group, setGroup] = useState("");

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert("Novo Grupo", "Informe o nome da turma.")
            }

            await groupCreate(group);
            navigation.navigate("players", { group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
                console.log(error);
            }
        }
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie uma turma e adicione pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}