import Card from "../src/components/Card";
import styles from "../styles/Login.module.css";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <Card title="Entre em sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Digite o seu e-mail" />
                    <Input type="password" placeholder="Digite a sua senha" />
                    <Button>Entrar</Button>
                    <Link href="/register">Ainda não possui conta?</Link>
                </form>
            </Card>
        </div>
    )
}