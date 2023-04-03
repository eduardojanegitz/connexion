import Card from "../src/components/Card";
import styles from "../styles/Login.module.css";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className={styles.background}>
             <Card title="Crie a sua conta">
                <form className={styles.form}>
                    <Input type="text" placeholder="Digite o seu nome" />
                    <Input type="email" placeholder="Digite o seu e-mail" />
                    <Input type="password" placeholder="Digite a sua senha" />
                    <Button>Cadastrar</Button>
                    <Link href="/login">Já possui conta?</Link>
                </form>
            </Card>
        </div>
    )
}