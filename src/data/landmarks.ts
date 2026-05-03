import type { Landmark } from "@/types/landmark";

export const landmarks: Landmark[] = [
  {
    id: 1,
    title: "Cemitério dos Prazeres",
    slug: "cemiterio-dos-prazeres",
    category: ["death-memory"],
    routeStop: 1,
    tramStop: "1 - Campo Ourique (Prazeres)",
    locationName: "Campo de Ourique",
    type: "Cemetery",
    price: "Free",
    summary:
      "A historic Lisbon cemetery known for its funerary heritage, notable mausoleums, and cultural significance.",
    historicalContext:
      "Opened in the 19th century, Cemitério dos Prazeres became one of Lisbon’s most important cemeteries, reflecting changing attitudes toward death, mourning, and urban memory.",
    estimatedVisitTime: "20–30 min",
    nextStopId: 9
  },
  {
    id: 11,
    title: "Museu do Aljube",
    slug: "museu-do-aljube",
    category: ["dictatorship"],
    routeStop: 11,
    tramStop: "Sé",
    locationName: "Sé",
    type: "Museum",
    price: "4€",
    summary:
      "A museum dedicated to resistance and political imprisonment during Portugal’s dictatorship.",
    historicalContext:
      "Museu do Aljube preserves the memory of political repression, censorship, imprisonment, and resistance during the Estado Novo regime.",
    estimatedVisitTime: "30–45 min",
    nextStopId: 24
  },
  {
    id: 24,
    title: "Igreja São Domingos",
    slug: "igreja-sao-domingos",
    category: ["death-memory"],
    routeStop: 24,
    tramStop: "Rossio",
    locationName: "Rossio",
    type: "Church",
    price: "Free",
    summary:
      "A historic church marked by destruction, fire, and memories tied to religious persecution.",
    historicalContext:
      "Igreja São Domingos is deeply connected to Lisbon’s religious history and collective memory, including episodes associated with violence and devastation.",
    estimatedVisitTime: "15–25 min",
    nextStopId: 28
  },
    {
    id: 9,
    title: "Pátio do Carrasco",
    slug: "patio-do-carrasco",
    category: ["crimes-urban-legends"],
    routeStop: 8,
    tramStop: "Portas do Sol",
    locationName: "Alfama",
    type: "Village Square",
    price: "Free",
    summary:
        "A hidden historic site in Alfama associated with public executions and Lisbon’s darker judicial memory.",
    historicalContext:
        "Pátio do Carrasco preserves the memory of punishment, execution, and public justice practices in historic Lisbon, reflecting how violence was embedded into the city’s social and urban fabric.",
    estimatedVisitTime: "5 min",
    nextStopId: 28
    },
  {
    id: 28,
    title: "Convento do Carmo",
    slug: "convento-do-carmo",
    category: ["earthquake"],
    routeStop: 28,
    tramStop: "Sacramento",
    locationName: "Sacramento",
    type: "Museum",
    price: "7€",
    summary:
      "An iconic ruin in Lisbon that preserves the visible scars of the 1755 earthquake.",
    historicalContext:
      "Convento do Carmo remains one of Lisbon’s most striking reminders of the 1755 earthquake, standing as both ruin and historical testimony.",
    estimatedVisitTime: "20–30 min"
  }
];