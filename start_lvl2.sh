#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

clear
echo -e "${YELLOW}>> NIVEL 2: EL CHOQUE DE TRENES (MERGE CONFLICT) <<${NC}\n"
echo "Preparando el escenario para el Nivel 2..."

# 1. Crear un main.c base en main y hacer commit
cat <<EOF > main.c
#include <unistd.h>

int main(void) {
    // TODO: iniciar variables
    return (0);
}
EOF
git add main.c
git commit -m "Añadida estructura inicial de main.c" --quiet

# 2. Crear rama del compañero y hacer su cambio
git branch compañero-rama
git checkout compañero-rama --quiet
cat <<EOF > main.c
#include <unistd.h>

int main(void) {
    // Variables inicializadas por tu compañero
    return (0);
}
EOF
git add main.c
git commit -m "Compañero inicializa variables" --quiet

# 3. Volver a main y hacer un cambio conflictivo
git checkout main --quiet
cat <<EOF > main.c
#include <unistd.h>

int main(void) {
    // Variables inicializadas por mi
    return (0);
}
EOF
git add main.c
git commit -m "Sensei inicializa variables" --quiet

echo -e "${GREEN}¡Escenario preparado!${NC}\n"
echo -e "Misión:"
echo -e "1. Tu compañero ha hecho cambios en la rama ${GREEN}compañero-rama${NC}."
echo -e "2. Tú has hecho cambios en la misma línea en tu rama actual (${GREEN}main${NC})."
echo -e "3. Ejecuta: ${YELLOW}git merge compañero-rama${NC}"
echo -e "4. ¡Oh no! Git te avisará de un conflicto (CONFLICT). Abre ${GREEN}main.c${NC} en tu editor (VSCode o Vim)."
echo -e "5. Borra las marcas de conflicto (<<<<, ====, >>>>) y deja la versión del código que prefieras."
echo -e "6. Guarda el archivo, haz un ${GREEN}git add main.c${NC} y termina la fusión con ${GREEN}git commit${NC}.\n"

echo -e "Cuando hayas resuelto el conflicto y hecho el commit, ejecuta: ${BLUE}./check_lvl2.sh${NC}"