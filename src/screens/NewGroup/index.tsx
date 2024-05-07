import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
    const navigation = useNavigation();
    const [group, setGroup] = useState("");

    function handleNew() {
        navigation.navigate("players", { group: "Teste" })
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