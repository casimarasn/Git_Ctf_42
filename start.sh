#!/bin/bash

# Definición de colores para darle estilo 42
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

clear
echo -e "${BLUE}====================================================${NC}"
echo -e "${YELLOW}               <GIT/> CTF - 42 MÁLAGA                ${NC}"
echo -e "${BLUE}====================================================${NC}\n"

echo -e "¡Hola! Has clonado el repositorio con éxito.\n"
echo -e "Estás a punto de empezar tu proyecto ${GREEN}push_swap${NC} con tus compañeros,"
echo -e "pero primero debemos dominar los universos paralelos (Ramas).\n"

echo -e "${YELLOW}>> NIVEL 1: UNIVERSOS PARALELOS <<${NC}\n"
echo -e "Misión:"
echo -e "1. Crea una nueva rama llamada ${GREEN}fix-norminette${NC} y muévete a ella."
echo -e "2. Abre el archivo ${GREEN}utils.c${NC} (imagina que ya existe y lo has creado)."
echo -e "3. Añade un comentario al final del archivo que diga: ${YELLOW}// fix norm${NC}"
echo -e "4. Guarda el archivo, haz un ${GREEN}git add${NC} y un ${GREEN}git commit${NC} con un mensaje descriptivo."
echo -e "5. NO fusiones (merge) la rama todavía.\n"

echo -e "Cuando creas que lo tienes, ejecuta: ${BLUE}./check_lvl1.sh${NC}"