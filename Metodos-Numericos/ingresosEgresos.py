import random

servicios = {
    "Videos promocionales cortos para redes sociales (15s)": 60000,
    "Videos promocionales cortos para redes sociales (30s)": 100000,
    "Videos promocionales cortos para redes sociales (1m)": 150000,
    "Comerciales más elaborados para plataformas digitales": 150000,
    "Animaciones explicativas para productos o servicios": 50000,
    "Carteles digitales personalizados": 80000,
    "Diseños para promociones u ofertas especiales": 25000,
    "Fotografías de alta calidad para catálogos y redes sociales": 100000,
    "Edición profesional para resaltar detalles": 120000,
    "Paquetes Personalizados": random.randint(150000, 300000)
}

membresia = {
    "Gestión y Estrategias de marketing para 1 cuenta": 150000,
    "Gestión y Estrategias de marketing para 2 cuentas": 220000,
    "Gestión y Estrategias de marketing para 3 cuentas": 300000,
}

clientes_membresia = []

def simular_ingresos_mensuales(mes):
    if mes == 1:
        num_clientes = random.randint(5, 10)
    else:
        num_clientes = int(simular_ingresos_mensuales(mes-1)[1] * random.uniform(1.1, 1.3))
        if num_clientes > 440:
            num_clientes = int(simular_ingresos_mensuales(mes-1)[1] * random.uniform(0.8, 0.9))

    ingresos_mes = 0
    servicios_contador = {}
    for _ in range(num_clientes):
        servicios_cliente = []
        probabilidades = {servicio: 0.6 for servicio in servicios}  # Probabilidades iniciales
        for servicio, precio in servicios.items():
            if random.random() < probabilidades[servicio]:
                ingresos_mes += precio
                servicios_cliente.append(servicio)
                if servicio in servicios_contador:
                    servicios_contador[servicio]["clientes"] += 1
                    servicios_contador[servicio]["ingresos"] += precio
                else:
                    servicios_contador[servicio] = {"clientes": 1, "ingresos": precio}
                for otro_servicio in probabilidades:
                    probabilidades[otro_servicio] *= 0.70  # Disminuir probabilidades en un 30%
        if random.random() < 0.3:
            cuentas = random.choice(list(membresia.keys()))
            ingresos_mes += membresia[cuentas]
            servicios_cliente.append(cuentas)
            if cuentas in servicios_contador:
                servicios_contador[cuentas]["clientes"] += 1
                servicios_contador[cuentas]["ingresos"] += membresia[cuentas]
            else:
                servicios_contador[cuentas] = {"clientes": 1, "ingresos": membresia[cuentas]}
            if mes == 1:
                clientes_membresia.append(membresia[cuentas])
    if mes > 1:
        for valor in clientes_membresia:
            ingresos_mes += valor
    return ingresos_mes, num_clientes, servicios_contador

def calcular_egresos_mensuales(mes):
    if mes == 1:
        return 10230000
    else:
        return 6563266

ingresos_mensuales = []
egresos_mensuales = []
flujo_caja_mensual = []

for mes in range(1, 61):
    ingresos, clientes, servicios_contador = simular_ingresos_mensuales(mes)
    egresos = calcular_egresos_mensuales(mes)
    flujo_caja = ingresos - egresos

    ingresos_mensuales.append(ingresos)
    egresos_mensuales.append(egresos)
    flujo_caja_mensual.append(flujo_caja)

    print(f"\n--- Mes {mes} ---")
    print(f"Total de Clientes: {clientes}")
    print(f"Servicios Elegidos: {len(servicios_contador)}")
    valoresMensuales = 0
    for servicio, datos in servicios_contador.items():
        print(f"  {servicio} = {datos['clientes']} clientes,  ${datos['ingresos']}")
        valoresMensuales += datos['ingresos']
    print(valoresMensuales)
    print(f"Total de Ingresos: ${ingresos}")
    print(f"Total de Egresos: ${egresos}")
    print(f"Flujo de Caja Neto: ${flujo_caja}")