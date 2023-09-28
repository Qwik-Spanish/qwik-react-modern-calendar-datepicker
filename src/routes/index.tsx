import { component$, useStyles$ } from "@builder.io/qwik";
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
  // 3.- Estilos
  useStyles$(calendarDatePicker);
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
        <QCalendarReactMultiplePicker />
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
