#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

clear
echo -e "${YELLOW}>> NIVEL 3: LA URGENCIA (GIT STASH) <<${NC}\n"
echo "Preparando el escenario para el Nivel 3..."

# Crear un Makefile base y hacer commit
echo -e "NAME = push_swap\nCC = gcc\nCFLAGS = -Wall -Wextra -Werror\n" > Makefile
git add Makefile
git commit -m "Añadido Makefile base" --quiet

# Modificar el Makefile pero NO hacer commit (simular trabajo a medias)
echo -e "all: \$(NAME)\n" >> Makefile

echo -e "${GREEN}¡Escenario preparado!${NC}\n"
echo -e "Situación:"
echo -e "Estás a medias modificando el ${GREEN}Makefile${NC} (haz un 'git status' para comprobarlo)."
echo -e "De repente, te avisan de un bug URGENTE en ${GREEN}utils.c${NC} que hay que arreglar ya de ya.\n"

echo -e "Misión:"
echo -e "1. Guarda tu trabajo a medias (del Makefile) sin hacer commit usando: ${YELLOW}git stash${NC}"
echo -e "2. Abre ${GREEN}utils.c${NC} y añade al final: ${YELLOW}// Hotfix urgente aplicado${NC}"
echo -e "3. Haz un ${GREEN}git add utils.c${NC} y un ${GREEN}git commit -m \"Hotfix en utils\"${NC}"
echo -e "4. ¡Alivio! Ya has salvado el día. Ahora recupera tu trabajo del Makefile con: ${YELLOW}git stash pop${NC}\n"

echo -e "Cuando hayas recuperado el Makefile, ejecuta: ${BLUE}./check_lvl3.sh${NC}"