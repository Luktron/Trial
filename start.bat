@echo off
chcp 65001 >nul
title EXAM://PROTOCOL — Servidor

echo.
echo  Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  [ERRO] Node.js nao encontrado.
    echo  Baixe em: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo  Node.js encontrado.
echo.
echo  Iniciando servidor na porta 3000...
echo  Acesse http://localhost:3000 no navegador.
echo  Para parar: feche esta janela ou pressione Ctrl+C
echo.

node server.js

pause
