#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Evaluando Nivel 1...${NC}"
sleep 1

# 1. Comprobar si la rama existe
if ! git show-ref --verify --quiet refs/heads/fix-norminette; then
    echo -e "${RED}[KO]${NC} La rama 'fix-norminette' no existe."
    echo "Pista: usa 'git branch <nombre>' o 'git checkout -b <nombre>'"
    exit 1
fi
echo -e "${GREEN}[OK]${NC} Rama 'fix-norminette' encontrada."

# 2. Comprobar si han hecho un commit en esa rama que no esté en main
DIFF=$(git log main..fix-norminette --oneline)

if [ -z "$DIFF" ]; then
    echo -e "${RED}[KO]${NC} No hay commits nuevos en la rama 'fix-norminette'."
    echo "Asegúrate de haber modificado utils.c, hecho git add y git commit estando en esa rama."
    exit 1
fi
echo -e "${GREEN}[OK]${NC} Commit detectado en la nueva rama."

# 3. Comprobar en qué rama están actualmente (Opcional, pero bueno para asegurar)
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "fix-norminette" ]; then
    echo -e "${YELLOW}[!]${NC} Ojo, has vuelto a la rama $CURRENT_BRANCH, pero el commit está bien hecho."
fi

# MENSAJE DE ÉXITO
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}¡NIVEL 1 SUPERADO!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Tu primera Flag es: ${YELLOW}FLAG{m4st3r_0f_br4nch3s}${NC}\n"

echo -e "Para continuar al Nivel 2, ejecuta: ${BLUE}./start_lvl2.sh${NC}"