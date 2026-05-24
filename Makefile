.PHONY: all run check status reset

# Si escriben solo 'make', ejecutará 'make run' por defecto
all: run

# Lanza el Game Master interactivo
run:
	@./git-gud

# Lanza el evaluador de forma manual
check:
	@./check

# Atajo útil para ver el árbol de ramas en cualquier momento
status:
	@git --no-pager log --graph --oneline --all

# Reinicia el progreso del juego (borra el estado)
reset:
	@rm -f .ctf_state
	@echo "Progreso reiniciado. Ejecuta 'make run' para empezar de nuevo."