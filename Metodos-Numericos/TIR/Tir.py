from scipy.optimize import fsolve

# Parámetros proporcionados
VP_ingresos = 8078265169  # Valor presente de ingresos
VP_egresos = 220251943    # Valor presente de egresos
tasa_fija = 0.02068333    # Tasa fija mensual (2.068333%)
n = 12                    # Número de periodos (meses)

# Cálculo del VAN con la tasa fija
VAN_con_tasa_fija = VP_ingresos - VP_egresos * ((1 + tasa_fija) ** n)

# Definimos la función para hallar la TIR
def van_real(tasa):
    return VP_ingresos - VP_egresos * ((1 + tasa) ** n)

# Resolviendo para la TIR con fsolve
tir_estimada = fsolve(van_real, 0.02)[0]
VAN_con_tir = van_real(tir_estimada)

# Mostrar resultados con formato
tir_mensual_percent = tir_estimada * 100

print(f"""
RESULTADOS DEL ANÁLISIS

1. Tasa fija mensual evaluada: 2.068333%
   → VAN con tasa fija: ${VAN_con_tasa_fija:,.2f}

2. TIR encontrada (mensual): {tir_mensual_percent:.4f}%
   → VAN con esa TIR: ${VAN_con_tir:,.2f}

Conclusión:
La TIR mensual de aproximadamente {tir_mensual_percent:.2f}% indica que la inversión es altamente rentable,
ya que supera con creces la tasa objetivo de 2.068333% mensual.
""")
