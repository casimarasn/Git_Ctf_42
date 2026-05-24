#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Evaluando Nivel 2...${NC}"
sleep 1

# 1. Comprobar que no hay conflicto activo (unmerged files)
if git ls-files -u | grep -q "main.c"; then
    echo -e "${RED}[KO]${NC} Aún tienes conflictos sin resolver en 'main.c'."
    echo "Pista: Edita el archivo, borra las marcas, haz 'git add main.c' y luego 'git commit'."
    exit 1
fi

# 2. Comprobar si hay marcadores de conflicto sobrantes en el código
if grep -qE "<<<<<<<|=======|>>>>>>>" main.c 2>/dev/null; then
    echo -e "${RED}[KO]${NC} Has hecho commit, pero te has dejado marcas de conflicto (<<<<<<< o =======) escritas en main.c."
    echo "Pista: Arréglalo en el editor, haz 'git add main.c' y 'git commit --amend'."
    exit 1
fi

# 3. Comprobar si el merge existe (si la rama compañera está en el historial de main)
if ! git branch --merged main | grep -q "compañero-rama"; then
     echo -e "${RED}[KO]${NC} La rama 'compañero-rama' no está fusionada en 'main'."
     echo "Asegúrate de haber ejecutado 'git merge compañero-rama'."
     exit 1
fi

echo -e "${GREEN}[OK]${NC} ¡Conflicto resuelto magistralmente!"

# MENSAJE DE ÉXITO
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}¡NIVEL 2 SUPERADO!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Tu segunda Flag es: ${YELLOW}FLAG{c0nfl1ct_k1ll3r_9000}${NC}\n"

echo -e "Preparado para la urgencia final. Ejecuta: ${BLUE}./start_lvl3.sh${NC}"