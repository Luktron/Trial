# EXAM://PROTOCOL — Termux

## Instalação (uma vez só)

```bash
# 1. Instalar dependências
pkg update && pkg install nodejs git

# 2. Copiar os arquivos para o Termux
#    Opção A — via cabo USB (MTP): copie a pasta Prova/ para ~/storage/shared/Prova
#    Opção B — via git (se tiver repositório):
#    git clone <url> ~/prova

# 3. Dar permissão ao script
chmod +x ~/storage/shared/Prova/start.sh
```

## Iniciar o servidor

```bash
cd ~/storage/shared/Prova
bash start.sh
```

Ou em porta diferente:

```bash
bash start.sh 8080
```

## Acessar no celular

Abra o navegador e acesse o IP exibido no terminal, ex:

```
http://192.168.15.114:3000
```

Outros dispositivos na mesma rede Wi-Fi também podem acessar pelo mesmo endereço.

## Manter rodando em segundo plano

```bash
# Instalar tmux
pkg install tmux

# Criar sessão
tmux new -s exam

# Iniciar servidor dentro do tmux
bash start.sh

# Desanexar (servidor continua rodando): Ctrl+B, depois D

# Reanexar depois:
tmux attach -t exam
```

## Parar o servidor

`Ctrl+C` no terminal, ou:

```bash
pkill -f "node server.js"
```
