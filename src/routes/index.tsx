import { component$, useSignal, useStyles$,  $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// 1.- el componente de NPM ya convertido en Qwik
import {
  QCalendarReactPicker,
  QCalendarReactRangePicker,
  QCalendarReactMultiplePicker,
} from "~/integrations/react/calendar-datepicker";

// 2.- Estilos del componente que acabamos de incluir en el proyecto
import calendarDatePicker from "./../../node_modules/react-modern-calendar-datepicker/lib/DatePicker.css?inline";

export default component$(() => {
  const preSelectIndividualMultiple = useSignal([
    {
      year: 2019,
      month: 10,
      day: 2,
    },
    {
      year: 2019,
      month: 10,
      day: 15,
    },
    {
      year: 2019,
      month: 10,
      day: 30,
    },
  ]);
  // 3.- Estilos
  useStyles$(calendarDatePicker);

  // Function to pass in React child component to update select range value
  const setRange = $((value: any) => {
    console.log('router/index.tsx', value);
    preSelectIndividualMultiple.value = value;
  });

  return (
    <>
      <h1>React Modern Calendar</h1>
      <hr />
      <div>
        <h2>Básico (Fecha fija de inicio)</h2>
        <QCalendarReactPicker />;
        <hr />
      </div>
      <div>
        <h2>Rango</h2>
        <QCalendarReactRangePicker />
        <hr />
      </div>
      <div>
        <h2>Múltiples selecciones</h2>
        <QCalendarReactMultiplePicker selections={preSelectIndividualMultiple.value} setSelectedDayRange={setRange}/>
        <hr />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
