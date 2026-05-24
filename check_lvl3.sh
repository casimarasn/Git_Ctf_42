#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Evaluando Nivel 3...${NC}"
sleep 1

# 1. Comprobar si existe el commit del hotfix en utils.c
if ! git log -1 --stat | grep -q "utils.c"; then
    echo -e "${RED}[KO]${NC} No se detecta tu último commit modificando 'utils.c'."
    echo "Asegúrate de haber hecho el commit del hotfix."
    exit 1
fi

# 2. Comprobar si el Makefile está modificado en el working tree (sin commit)
if ! git status --porcelain | grep -q " M Makefile"; then
    echo -e "${RED}[KO]${NC} El 'Makefile' no está modificado en tu área de trabajo."
    echo "¿Seguro que hiciste 'git stash pop' para recuperar tu trabajo?"
    exit 1
fi

echo -e "${GREEN}[OK]${NC} ¡Urgencia resuelta y trabajo recuperado!"

# MENSAJE DE ÉXITO FINAL
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}¡NIVEL 3 SUPERADO! ¡CTF COMPLETADO!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Tu bandera final es: ${YELLOW}FLAG{g1t_m4st3r_unl0ck3d}${NC}\n"
echo -e "¡Enhorabuena! Ya estás listo para enfrentarte a push_swap en equipo sin destruir el repositorio."