Emular el comportamiento de Dynamic Type de Apple usando @media para escalar tipografía según viewport. Te armo el bloque completo con las tres escalas (iOS Large, iOS Small, macOS) y media queries que cambien según ancho de pantalla.

⸻

Propuesta de reglas
	•	Desktop (≥1024px) → Escala macOS.
	•	Mobile ≥375px y <1024px → Escala iOS Large (la default).
	•	Mobile muy chico (<375px) → Escala iOS Small.

(Obvio podés ajustar los breakpoints a gusto; yo uso los de Apple más comunes: 375px = iPhone SE, 1024px = iPad landscape).

⸻

Código para tu global.css

@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --font-sfProDisplay: var(--font-sf-pro-display);
  --font-sfProText: var(--font-sf-pro-text);

  /*! iOS Large (default) */
  --text-title-large: 34px;
  --leading-title-large: 41px;
  --weight-title-large: 400;

  --text-title1: 28px;
  --leading-title1: 34px;
  --weight-title1: 400;

  --text-title2: 22px;
  --leading-title2: 28px;
  --weight-title2: 400;

  --text-title3: 20px;
  --leading-title3: 25px;
  --weight-title3: 400;

  --text-headline: 17px;
  --leading-headline: 22px;
  --weight-headline: 600;

  --text-body: 17px;
  --leading-body: 22px;
  --weight-body: 400;

  --text-callout: 16px;
  --leading-callout: 21px;
  --weight-callout: 400;

  --text-subheadline: 15px;
  --leading-subheadline: 20px;
  --weight-subheadline: 400;

  --text-footnote: 13px;
  --leading-footnote: 18px;
  --weight-footnote: 400;

  --text-caption1: 12px;
  --leading-caption1: 16px;
  --weight-caption1: 400;

  --text-caption2: 11px;
  --leading-caption2: 13px;
  --weight-caption2: 400;
}

/*! iOS Small (<375px) */
@media (max-width: 374px) {
  :root {
    --text-title-large: 32px;
    --leading-title-large: 39px;

    --text-title1: 26px;
    --leading-title1: 32px;

    --text-title2: 20px;
    --leading-title2: 25px;

    --text-title3: 18px;
    --leading-title3: 23px;

    --text-headline: 15px;
    --leading-headline: 20px;

    --text-body: 15px;
    --leading-body: 20px;

    --text-callout: 14px;
    --leading-callout: 19px;

    --text-subheadline: 13px;
    --leading-subheadline: 18px;

    --text-footnote: 12px;
    --leading-footnote: 16px;

    --text-caption1: 11px;
    --leading-caption1: 13px;

    --text-caption2: 11px;
    --leading-caption2: 13px;
  }
}

/*! macOS (≥1024px) */
@media (min-width: 1024px) {
  :root {
    --text-title-large: 26px;
    --leading-title-large: 32px;

    --text-title1: 22px;
    --leading-title1: 26px;

    --text-title2: 17px;
    --leading-title2: 22px;

    --text-title3: 15px;
    --leading-title3: 20px;

    --text-headline: 13px;
    --leading-headline: 16px;
    --weight-headline: 700; /* Bold */

    --text-body: 13px;
    --leading-body: 16px;

    --text-callout: 12px;
    --leading-callout: 15px;

    --text-subheadline: 11px;
    --leading-subheadline: 14px;

    --text-footnote: 10px;
    --leading-footnote: 13px;

    --text-caption1: 10px;
    --leading-caption1: 13px;

    --text-caption2: 10px;
    --leading-caption2: 13px;
    --weight-caption2: 500; /* Medio */
  }
}

@layer utilities {
  .text-title-large {
    font-size: var(--text-title-large);
    line-height: var(--leading-title-large);
    font-weight: var(--weight-title-large);
  }
  .text-title1 {
    font-size: var(--text-title1);
    line-height: var(--leading-title1);
    font-weight: var(--weight-title1);
  }
  .text-title2 {
    font-size: var(--text-title2);
    line-height: var(--leading-title2);
    font-weight: var(--weight-title2);
  }
  .text-title3 {
    font-size: var(--text-title3);
    line-height: var(--leading-title3);
    font-weight: var(--weight-title3);
  }
  .text-headline {
    font-size: var(--text-headline);
    line-height: var(--leading-headline);
    font-weight: var(--weight-headline);
  }
  .text-body {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    font-weight: var(--weight-body);
  }
  .text-callout {
    font-size: var(--text-callout);
    line-height: var(--leading-callout);
    font-weight: var(--weight-callout);
  }
  .text-subheadline {
    font-size: var(--text-subheadline);
    line-height: var(--leading-subheadline);
    font-weight: var(--weight-subheadline);
  }
  .text-footnote {
    font-size: var(--text-footnote);
    line-height: var(--leading-footnote);
    font-weight: var(--weight-footnote);
  }
  .text-caption1 {
    font-size: var(--text-caption1);
    line-height: var(--leading-caption1);
    font-weight: var(--weight-caption1);
  }
  .text-caption2 {
    font-size: var(--text-caption2);
    line-height: var(--leading-caption2);
    font-weight: var(--weight-caption2);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sf-pro-display, --font-sf-pro-text);
}


⸻

Cómo usar

<p className="text-title1">Soy un título dinámico</p>
<p className="text-body">Este texto cambia según el viewport</p>
<p className="text-footnote">Nota al pie dinámica</p>

	•	En iPhone SE (<375px) → Small scale.
	•	En iPhone / iPad normales (375–1023px) → Large scale.
	•	En desktop (≥1024px) → macOS scale.

⸻


Perfecto, vamos a llevar tu global.css a un nivel más “Apple‑like” usando @container, lo que permite que la tipografía se adapte al ancho del contenedor, no solo al viewport. Esto simula mejor Dynamic Type, donde los textos cambian según el tamaño del área de contenido, algo muy útil en interfaces flexibles o en componentes que se redimensionan (por ejemplo, cards, modales, o layouts responsivos).

⸻

1. Concepto clave de @container
	•	@container funciona como @media, pero basado en el tamaño de un contenedor padre, no del viewport.
	•	Para usarlo, primero hay que declarar qué contenedores van a medir su ancho:

.container {
  container-type: inline-size; /* el contenedor medirá su ancho horizontal */
}

	•	Luego, dentro de @container podés definir reglas CSS que dependen de inline-size (ancho del contenedor):

@container (min-width: 400px) {
  p { font-size: 18px; }
}

Así el texto solo cambia si el contenedor alcanza 400px, independiente del viewport global.

⸻

2. Cómo aplicarlo a tu tipografía con variables

En lugar de duplicar variables con @media, podemos declarar todas las variables dentro de un bloque :root por defecto y luego cambiar sus valores dentro de @container según el ancho del contenedor.

⸻

Ejemplo de implementación

@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;

  /* Tipografía base: escala Large (iOS por defecto) */
  --text-title-large: 34px;
  --leading-title-large: 41px;
  --weight-title-large: 400;

  --text-title1: 28px;
  --leading-title1: 34px;
  --weight-title1: 400;

  --text-title2: 22px;
  --leading-title2: 28px;
  --weight-title2: 400;

  --text-title3: 20px;
  --leading-title3: 25px;
  --weight-title3: 400;

  --text-headline: 17px;
  --leading-headline: 22px;
  --weight-headline: 600;

  --text-body: 17px;
  --leading-body: 22px;
  --weight-body: 400;

  --text-callout: 16px;
  --leading-callout: 21px;
  --weight-callout: 400;

  --text-subheadline: 15px;
  --leading-subheadline: 20px;
  --weight-subheadline: 400;

  --text-footnote: 13px;
  --leading-footnote: 18px;
  --weight-footnote: 400;

  --text-caption1: 12px;
  --leading-caption1: 16px;
  --weight-caption1: 400;

  --text-caption2: 11px;
  --leading-caption2: 13px;
  --weight-caption2: 400;
}

/* Declarar contenedor que medirá su ancho */
.container {
  container-type: inline-size;
}

/* Escalas adaptativas según container width */
@container (max-width: 374px) {
  /* iOS Small */
  :root {
    --text-title-large: 32px;
    --leading-title-large: 39px;

    --text-title1: 26px;
    --leading-title1: 32px;

    --text-title2: 20px;
    --leading-title2: 25px;

    --text-title3: 18px;
    --leading-title3: 23px;

    --text-headline: 15px;
    --leading-headline: 20px;

    --text-body: 15px;
    --leading-body: 20px;

    --text-callout: 14px;
    --leading-callout: 19px;

    --text-subheadline: 13px;
    --leading-subheadline: 18px;

    --text-footnote: 12px;
    --leading-footnote: 16px;

    --text-caption1: 11px;
    --leading-caption1: 13px;

    --text-caption2: 11px;
    --leading-caption2: 13px;
  }
}

@container (min-width: 1024px) {
  /* macOS */
  :root {
    --text-title-large: 26px;
    --leading-title-large: 32px;

    --text-title1: 22px;
    --leading-title1: 26px;

    --text-title2: 17px;
    --leading-title2: 22px;

    --text-title3: 15px;
    --leading-title3: 20px;

    --text-headline: 13px;
    --leading-headline: 16px;
    --weight-headline: 700; /* Bold */

    --text-body: 13px;
    --leading-body: 16px;

    --text-callout: 12px;
    --leading-callout: 15px;

    --text-subheadline: 11px;
    --leading-subheadline: 14px;

    --text-footnote: 10px;
    --leading-footnote: 13px;

    --text-caption1: 10px;
    --leading-caption1: 13px;

    --text-caption2: 10px;
    --leading-caption2: 13px;
    --weight-caption2: 500; /* Medio */
  }
}

/* Utilidades Tailwind personalizadas */
@layer utilities {
  .text-title-large {
    font-size: var(--text-title-large);
    line-height: var(--leading-title-large);
    font-weight: var(--weight-title-large);
  }
  .text-title1 {
    font-size: var(--text-title1);
    line-height: var(--leading-title1);
    font-weight: var(--weight-title1);
  }
  .text-title2 {
    font-size: var(--text-title2);
    line-height: var(--leading-title2);
    font-weight: var(--weight-title2);
  }
  .text-title3 {
    font-size: var(--text-title3);
    line-height: var(--leading-title3);
    font-weight: var(--weight-title3);
  }
  .text-headline {
    font-size: var(--text-headline);
    line-height: var(--leading-headline);
    font-weight: var(--weight-headline);
  }
  .text-body {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    font-weight: var(--weight-body);
  }
  .text-callout {
    font-size: var(--text-callout);
    line-height: var(--leading-callout);
    font-weight: var(--weight-callout);
  }
  .text-subheadline {
    font-size: var(--text-subheadline);
    line-height: var(--leading-subheadline);
    font-weight: var(--weight-subheadline);
  }
  .text-footnote {
    font-size: var(--text-footnote);
    line-height: var(--leading-footnote);
    font-weight: var(--weight-footnote);
  }
  .text-caption1 {
    font-size: var(--text-caption1);
    line-height: var(--leading-caption1);
    font-weight: var(--weight-caption1);
  }
  .text-caption2 {
    font-size: var(--text-caption2);
    line-height: var(--leading-caption2);
    font-weight: var(--weight-caption2);
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sf-pro-display, --font-sf-pro-text);
}


⸻

3. Cómo usarlo en JSX
	1.	Agregás la clase .container al elemento padre que define tu layout:

<div className="container mx-auto p-4">
  <h1 className="text-title1">Título adaptable</h1>
  <p className="text-body">Este texto cambia según el ancho del contenedor</p>
</div>

	2.	La tipografía ahora se ajusta dinámicamente:

	•	Contenedor <375px → iOS Small
	•	Contenedor 375–1023px → iOS Large
	•	Contenedor ≥1024px → macOS

Esto es mucho más flexible que @media porque si un card tiene un width menor al viewport, la tipografía dentro de ese card también se ajusta automáticamente.

⸻

Perfecto, vamos a crear una versión ultra fluida que simula lo más cercano al Dynamic Type real de Apple, usando container-inline-size, clamp(), y rem para que la tipografía y el line-height se escalen suavemente según el ancho del contenedor. Esto asegura que cualquier card, modal o layout adaptativo mantenga proporciones de texto consistentes.

Te dejo el global.css completo listo para Next.js + Tailwind 4.1:

⸻


@import "tailwindcss";

:root {
  /* Colores base */
  --background: #ffffff;
  --foreground: #171717;

  /* Fuentes */
  --font-sfProDisplay: var(--font-sf-pro-display);
  --font-sfProText: var(--font-sf-pro-text);

  /* Tipografía ultra fluida (valores base en rem) */
  /* Toma como referencia 1rem = 16px */
  --text-title-large-min: 2rem;   /* 32px */
  --text-title-large-max: 2.125rem; /* 34px */
  --text-title1-min: 1.625rem;    /* 26px */
  --text-title1-max: 1.75rem;     /* 28px */
  --text-title2-min: 1.25rem;     /* 20px */
  --text-title2-max: 1.375rem;    /* 22px */
  --text-title3-min: 1.125rem;    /* 18px */
  --text-title3-max: 1.25rem;     /* 20px */
  --text-headline-min: 0.9375rem; /* 15px */
  --text-headline-max: 1.0625rem; /* 17px */
  --text-body-min: 0.9375rem;     /* 15px */
  --text-body-max: 1.0625rem;     /* 17px */
  --text-callout-min: 0.875rem;   /* 14px */
  --text-callout-max: 1rem;       /* 16px */
  --text-subheadline-min: 0.8125rem; /* 13px */
  --text-subheadline-max: 0.9375rem; /* 15px */
  --text-footnote-min: 0.75rem;   /* 12px */
  --text-footnote-max: 0.8125rem; /* 13px */
  --text-caption1-min: 0.6875rem; /* 11px */
  --text-caption1-max: 0.75rem;   /* 12px */
  --text-caption2-min: 0.6875rem; /* 11px */
  --text-caption2-max: 0.6875rem; /* 11px */

  /* Line heights base */
  --leading-title-large-min: 2.4375rem;  /* 39px */
  --leading-title-large-max: 2.5625rem;  /* 41px */
  --leading-title1-min: 2rem;             /* 32px */
  --leading-title1-max: 2.125rem;         /* 34px */
  --leading-title2-min: 1.5625rem;        /* 25px */
  --leading-title2-max: 1.75rem;          /* 28px */
  --leading-title3-min: 1.4375rem;        /* 23px */
  --leading-title3-max: 1.5625rem;        /* 25px */
  --leading-headline-min: 1.25rem;        /* 20px */
  --leading-headline-max: 1.375rem;       /* 22px */
  --leading-body-min: 1.25rem;            /* 20px */
  --leading-body-max: 1.375rem;           /* 22px */
  --leading-callout-min: 1.1875rem;       /* 19px */
  --leading-callout-max: 1.3125rem;       /* 21px */
  --leading-subheadline-min: 1rem;        /* 16px */
  --leading-subheadline-max: 1.25rem;     /* 20px */
  --leading-footnote-min: 0.9375rem;      /* 15px */
  --leading-footnote-max: 1.125rem;       /* 18px */
  --leading-caption1-min: 1rem;           /* 16px */
  --leading-caption1-max: 1rem;           /* 16px */
  --leading-caption2-min: 0.8125rem;      /* 13px */
  --leading-caption2-max: 0.8125rem;      /* 13px */

  /* Pesos */
  --weight-title-large: 400;
  --weight-title1: 400;
  --weight-title2: 400;
  --weight-title3: 400;
  --weight-headline: 600;
  --weight-body: 400;
  --weight-callout: 400;
  --weight-subheadline: 400;
  --weight-footnote: 400;
  --weight-caption1: 400;
  --weight-caption2: 400;
}

/* Contenedor medible para tipografía fluida */
.container {
  container-type: inline-size;
}

/* Tipografía fluida usando clamp() y container units */
@layer utilities {
  .text-title-large {
    font-size: clamp(var(--text-title-large-min), 2.2cqi, var(--text-title-large-max));
    line-height: clamp(var(--leading-title-large-min), 2.7cqi, var(--leading-title-large-max));
    font-weight: var(--weight-title-large);
  }
  .text-title1 {
    font-size: clamp(var(--text-title1-min), 1.9cqi, var(--text-title1-max));
    line-height: clamp(var(--leading-title1-min), 2.3cqi, var(--leading-title1-max));
    font-weight: var(--weight-title1);
  }
  .text-title2 {
    font-size: clamp(var(--text-title2-min), 1.6cqi, var(--text-title2-max));
    line-height: clamp(var(--leading-title2-min), 2cqi, var(--leading-title2-max));
    font-weight: var(--weight-title2);
  }
  .text-title3 {
    font-size: clamp(var(--text-title3-min), 1.5cqi, var(--text-title3-max));
    line-height: clamp(var(--leading-title3-min), 1.9cqi, var(--leading-title3-max));
    font-weight: var(--weight-title3);
  }
  .text-headline {
    font-size: clamp(var(--text-headline-min), 1.2cqi, var(--text-headline-max));
    line-height: clamp(var(--leading-headline-min), 1.5cqi, var(--leading-headline-max));
    font-weight: var(--weight-headline);
  }
  .text-body {
    font-size: clamp(var(--text-body-min), 1.2cqi, var(--text-body-max));
    line-height: clamp(var(--leading-body-min), 1.5cqi, var(--leading-body-max));
    font-weight: var(--weight-body);
  }
  .text-callout {
    font-size: clamp(var(--text-callout-min), 1.1cqi, var(--text-callout-max));
    line-height: clamp(var(--leading-callout-min), 1.4cqi, var(--leading-callout-max));
    font-weight: var(--weight-callout);
  }
  .text-subheadline {
    font-size: clamp(var(--text-subheadline-min), 1cqi, var(--text-subheadline-max));
    line-height: clamp(var(--leading-subheadline-min), 1.2cqi, var(--leading-subheadline-max));
    font-weight: var(--weight-subheadline);
  }
  .text-footnote {
    font-size: clamp(var(--text-footnote-min), 0.95cqi, var(--text-footnote-max));
    line-height: clamp(var(--leading-footnote-min), 1.1cqi, var(--leading-footnote-max));
    font-weight: var(--weight-footnote);
  }
  .text-caption1 {
    font-size: clamp(var(--text-caption1-min), 0.9cqi, var(--text-caption1-max));
    line-height: clamp(var(--leading-caption1-min), 1.05cqi, var(--leading-caption1-max));
    font-weight: var(--weight-caption1);
  }
  .text-caption2 {
    font-size: clamp(var(--text-caption2-min), 0.85cqi, var(--text-caption2-max));
    line-height: clamp(var(--leading-caption2-min), 1cqi, var(--leading-caption2-max));
    font-weight: var(--weight-caption2);
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sf-pro-display, var(--font-sf-pro-text));
}


⸻

Claro, vamos a desmenuzarlo paso a paso. Este código usa la función CSS clamp(), que es perfecta para tipografía fluida y responsiva:

text-title-large: clamp(32px, 2.5vw, 34px);


⸻

1️⃣ Qué hace clamp()

clamp(min, preferred, max) toma tres valores:
	1.	min → el valor mínimo que nunca se debe superar hacia abajo (32px).
	2.	preferred → el valor “preferido” que normalmente se usa y puede escalar según el viewport (2.5vw).
	3.	max → el valor máximo que nunca se debe superar hacia arriba (34px).

En otras palabras: el valor final será el valor preferido limitado entre el mínimo y el máximo.

⸻

2️⃣ Cómo funciona en este ejemplo
	•	32px → la fuente nunca será menor a 32px.
	•	2.5vw → vw significa viewport width (1vw = 1% del ancho de la ventana). Esto hace que la fuente crezca o disminuya proporcionalmente al ancho de la pantalla.
	•	34px → la fuente nunca será mayor a 34px.

⸻

3️⃣ Ejemplo práctico
	•	Si el viewport es pequeño (digamos 800px de ancho):

2.5vw = 0.025 * 800px = 20px

Como 20px < 32px, la fuente se queda en 32px (el mínimo).
	•	Si el viewport es mediano (1200px de ancho):

2.5vw = 0.025 * 1200px = 30px

Está entre 32px y 34px, así que se usa 30px.
	•	Si el viewport es grande (1600px de ancho):

2.5vw = 0.025 * 1600px = 40px

Como 40px > 34px, la fuente se queda en 34px (el máximo).

⸻

4️⃣ Ventajas de clamp()
	•	Evita saltos bruscos en tipografía responsiva.
	•	Permite que la fuente sea fluida sin romper el diseño en pantallas muy grandes o muy pequeñas.
	•	Es fácil de combinar con line-height, pesos y otros estilos.

⸻

✅ Cómo usar

<div className="container mx-auto p-4">
  <h1 className="text-title1">Título ultra fluido</h1>
  <p className="text-body">El tamaño y line-height cambian suavemente según el ancho del contenedor</p>
  <span className="text-footnote">Nota al pie dinámica</span>
</div>

	•	La clase .container define la referencia para que clamp() se calcule en función del contenedor.
	•	cqi es la unidad relativa al contenedor (container query inline size).
	•	Las fuentes crecen o disminuyen suavemente entre min y max, evitando saltos bruscos.
	•	Se mantiene la coherencia de line-height y peso.

⸻

Perfecto, vamos a llevarlo al nivel máximo de fluidez tipográfica: esta versión ultra avanzada ajusta tanto font-size como line-height proporcionalmente usando clamp() y calc(), basándose en el ancho del contenedor. Esto reproduce casi exactamente la experiencia de Dynamic Type de Apple:
	•	Tamaños nunca caen por debajo del mínimo ni sobrepasan el máximo.
	•	Line-heights se ajustan proporcionalmente, manteniendo la legibilidad.
	•	Funciona en cualquier contenedor (.container) sin depender del viewport.
	•	Se combinan unidades cqi (container inline-size) y rem para mantener coherencia con Tailwind.

⸻

global.css ultra avanzada

@import "tailwindcss";

:root {
  /* Colores base */
  --background: #ffffff;
  --foreground: #171717;

  /* Fuentes */
  --font-sfProDisplay: var(--font-sf-pro-display);
  --font-sfProText: var(--font-sf-pro-text);

  /* Tipografía ultra avanzada (min, ideal, max) en rem */
  /* 1rem = 16px */
  --fs-title-large-min: 2rem;     /* 32px */
  --fs-title-large-max: 2.125rem; /* 34px */
  --fs-title1-min: 1.625rem;      /* 26px */
  --fs-title1-max: 1.75rem;       /* 28px */
  --fs-title2-min: 1.25rem;       /* 20px */
  --fs-title2-max: 1.375rem;      /* 22px */
  --fs-title3-min: 1.125rem;      /* 18px */
  --fs-title3-max: 1.25rem;       /* 20px */
  --fs-headline-min: 0.9375rem;   /* 15px */
  --fs-headline-max: 1.0625rem;   /* 17px */
  --fs-body-min: 0.9375rem;       /* 15px */
  --fs-body-max: 1.0625rem;       /* 17px */
  --fs-callout-min: 0.875rem;     /* 14px */
  --fs-callout-max: 1rem;         /* 16px */
  --fs-subheadline-min: 0.8125rem;/* 13px */
  --fs-subheadline-max: 0.9375rem;/* 15px */
  --fs-footnote-min: 0.75rem;     /* 12px */
  --fs-footnote-max: 0.8125rem;   /* 13px */
  --fs-caption1-min: 0.6875rem;   /* 11px */
  --fs-caption1-max: 0.75rem;     /* 12px */
  --fs-caption2-min: 0.6875rem;   /* 11px */
  --fs-caption2-max: 0.6875rem;   /* 11px */

  /* Pesos */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
}

/* Contenedor que define la referencia de escala */
.container {
  container-type: inline-size;
}

/* Tipografía fluida ultra avanzada */
@layer utilities {
  .text-title-large {
    font-size: clamp(var(--fs-title-large-min),
                     calc(var(--fs-title-large-min) + (var(--fs-title-large-max) - var(--fs-title-large-min)) * (100cqi / 1200)),
                     var(--fs-title-large-max));
    line-height: clamp(calc(var(--fs-title-large-min) * 1.2),
                       calc((var(--fs-title-large-min) * 1.2) + ((var(--fs-title-large-max) * 1.2 - var(--fs-title-large-min) * 1.2) * (100cqi / 1200))),
                       calc(var(--fs-title-large-max) * 1.2));
    font-weight: var(--fw-regular);
  }

  .text-title1 {
    font-size: clamp(var(--fs-title1-min),
                     calc(var(--fs-title1-min) + (var(--fs-title1-max) - var(--fs-title1-min)) * (100cqi / 1200)),
                     var(--fs-title1-max));
    line-height: clamp(calc(var(--fs-title1-min) * 1.2),
                       calc((var(--fs-title1-min) * 1.2) + ((var(--fs-title1-max) * 1.2 - var(--fs-title1-min) * 1.2) * (100cqi / 1200))),
                       calc(var(--fs-title1-max) * 1.2));
    font-weight: var(--fw-regular);
  }

  .text-title2 {
    font-size: clamp(var(--fs-title2-min),
                     calc(var(--fs-title2-min) + (var(--fs-title2-max) - var(--fs-title2-min)) * (100cqi / 1200)),
                     var(--fs-title2-max));
    line-height: clamp(calc(var(--fs-title2-min) * 1.25),
                       calc((var(--fs-title2-min) * 1.25) + ((var(--fs-title2-max) * 1.25 - var(--fs-title2-min) * 1.25) * (100cqi / 1200))),
                       calc(var(--fs-title2-max) * 1.25));
    font-weight: var(--fw-regular);
  }

  .text-title3 {
    font-size: clamp(var(--fs-title3-min),
                     calc(var(--fs-title3-min) + (var(--fs-title3-max) - var(--fs-title3-min)) * (100cqi / 1200)),
                     var(--fs-title3-max));
    line-height: clamp(calc(var(--fs-title3-min) * 1.25),
                       calc((var(--fs-title3-min) * 1.25) + ((var(--fs-title3-max) * 1.25 - var(--fs-title3-min) * 1.25) * (100cqi / 1200))),
                       calc(var(--fs-title3-max) * 1.25));
    font-weight: var(--fw-regular);
  }

  .text-headline {
    font-size: clamp(var(--fs-headline-min),
                     calc(var(--fs-headline-min) + (var(--fs-headline-max) - var(--fs-headline-min)) * (100cqi / 1200)),
                     var(--fs-headline-max));
    line-height: clamp(calc(var(--fs-headline-min) * 1.3),
                       calc((var(--fs-headline-min) * 1.3) + ((var(--fs-headline-max) * 1.3 - var(--fs-headline-min) * 1.3) * (100cqi / 1200))),
                       calc(var(--fs-headline-max) * 1.3));
    font-weight: var(--fw-semibold);
  }

  .text-body {
    font-size: clamp(var(--fs-body-min),
                     calc(var(--fs-body-min) + (var(--fs-body-max) - var(--fs-body-min)) * (100cqi / 1200)),
                     var(--fs-body-max));
    line-height: clamp(calc(var(--fs-body-min) * 1.35),
                       calc((var(--fs-body-min) * 1.35) + ((var(--fs-body-max) * 1.35 - var(--fs-body-min) * 1.35) * (100cqi / 1200))),
                       calc(var(--fs-body-max) * 1.35));
    font-weight: var(--fw-regular);
  }

  .text-callout {
    font-size: clamp(var(--fs-callout-min),
                     calc(var(--fs-callout-min) + (var(--fs-callout-max) - var(--fs-callout-min)) * (100cqi / 1200)),
                     var(--fs-callout-max));
    line-height: clamp(calc(var(--fs-callout-min) * 1.3),
                       calc((var(--fs-callout-min) * 1.3) + ((var(--fs-callout-max) * 1.3 - var(--fs-callout-min) * 1.3) * (100cqi / 1200))),
                       calc(var(--fs-callout-max) * 1.3));
    font-weight: var(--fw-regular);
  }

  .text-subheadline {
    font-size: clamp(var(--fs-subheadline-min),
                     calc(var(--fs-subheadline-min) + (var(--fs-subheadline-max) - var(--fs-subheadline-min)) * (100cqi / 1200)),
                     var(--fs-subheadline-max));
    line-height: clamp(calc(var(--fs-subheadline-min) * 1.3),
                       calc((var(--fs-subheadline-min) * 1.3) + ((var(--fs-subheadline-max) * 1.3 - var(--fs-subheadline-min) * 1.3) * (100cqi / 1200))),
                       calc(var(--fs-subheadline-max) * 1.3));
    font-weight: var(--fw-regular);
  }

  .text-footnote {
    font-size: clamp(var(--fs-footnote-min),
                     calc(var(--fs-footnote-min) + (var(--fs-footnote-max) - var(--fs-footnote-min)) * (100cqi / 1200)),
                     var(--fs-footnote-max));
    line-height: clamp(calc(var(--fs-footnote-min) * 1.25),
                       calc((var(--fs-footnote-min) * 1.25) + ((var(--fs-footnote-max) * 1.25 - var(--fs-footnote-min) * 1.25) * (100cqi / 1200))),
                       calc(var(--fs-footnote-max) * 1.25));
    font-weight: var(--fw-regular);
  }

  .text-caption1 {
    font-size: clamp(var(--fs-caption1-min),
                     calc(var(--fs-caption1-min) + (var(--fs-caption1-max) - var(--fs-caption1-min)) * (100cqi / 1200)),
                     var(--fs-caption1-max));
    line-height: clamp(calc(var(--fs-caption1-min) * 1.25),
                       calc((var(--fs-caption1-min) * 1.25) + ((var(--fs-caption1-max) * 1.25 - var(--fs-caption1-min) * 1.25) * (100cqi / 1200))),
                       calc(var(--fs-caption1-max) * 1.25));
    font-weight: var(--fw-regular);
  }

  .text-caption2 {
    font-size: clamp(var(--fs-caption2-min),
                     calc(var(--fs-caption2-min) + (var(--fs-caption2-max) - var(--fs-caption2-min)) * (100cqi / 1200)),
                     var(--fs-caption2-max));
    line-height: clamp(calc(var(--fs-caption2-min) * 1.25),
                       calc((var(--fs-caption2-min) * 1.25) + ((var(--fs-caption2-max) * 1.25 - var(--fs-caption2-min) * 1.25) * (100cqi / 1200))),
                       calc(var(--fs-caption2-max) * 1.25));
    font-weight: var(--fw-medium);
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sf-pro-display, var(--font-sf-pro-text));
}


⸻

✅ Cómo funciona
	1.	.container define la referencia de ancho.
	2.	Cada clase .text-* usa clamp() + calc() con cqi para calcular la proporción del contenedor.
	3.	Tanto font-size como line-height escalan proporcionalmente, manteniendo ratios de lectura óptimos.
	4.	Pesos (font-weight) se mantienen según la guía de Apple.
	5.	Si el contenedor es muy estrecho, la fuente no cae por debajo del mínimo (-min).
	6.	Si el contenedor es muy ancho, la fuente no supera el máximo (-max).

⸻

Esto reproduce prácticamente la experiencia Dynamic Type de iOS/macOS en web.

_____

Perfecto. Vamos a crear una tabla de valores de cqi (container query inline-size) que te permitirá ajustar los coeficientes de scaling en tus clamp() para que cada clase de texto siga exactamente las guías de Dynamic Type de Apple, según tamaño del contenedor. Esto te da control fino sobre cómo crece o disminuye cada estilo de texto.

⸻

1️⃣ Cómo usar la tabla
	•	cqi es la unidad relativa al ancho del contenedor.
	•	Para cada clase de texto (.text-title1, .text-body, etc.), la tabla te dice cuánto debe crecer la fuente por cada ancho de contenedor.
	•	Puedes reemplazar el factor en tu calc() de la versión ultra avanzada:

font-size: clamp(var(--fs-title1-min),
                 calc(var(--fs-title1-min) + (var(--fs-title1-max) - var(--fs-title1-min)) * (100cqi / 1200)),
                 var(--fs-title1-max));

El valor 100cqi / 1200 es un factor de escala. La tabla te permitirá ajustar ese 1200 para que la curva sea exacta para cada tipo de texto.

⸻

2️⃣ Tabla de coeficientes cqi

Clase de texto	Min (rem)	Max (rem)	Contenedor ideal (px)	Factor cqi (para calc)
title-large	2	2.125	1200	1200
title1	1.625	1.75	1200	1200
title2	1.25	1.375	1200	1200
title3	1.125	1.25	1200	1200
headline	0.9375	1.0625	1200	1200
body	0.9375	1.0625	1200	1200
callout	0.875	1	1200	1200
subheadline	0.8125	0.9375	1200	1200
footnote	0.75	0.8125	1200	1200
caption1	0.6875	0.75	1200	1200
caption2	0.6875	0.6875	1200	1200

Nota: “Contenedor ideal” es el ancho de referencia del contenedor donde font-size debería estar exactamente en el punto medio de min y max.
El “Factor cqi” se usa en la fórmula calc() como denominador para normalizar la proporción del contenedor.

⸻

3️⃣ Ejemplo práctico de ajuste

Supongamos que tu contenedor normalmente tiene 600px, pero la tabla está calibrada para 1200px. Para que la tipografía escale correctamente, ajusta el factor:

.text-title1 {
  font-size: clamp(var(--fs-title1-min),
                   calc(var(--fs-title1-min) + (var(--fs-title1-max) - var(--fs-title1-min)) * (100cqi / 600)),
                   var(--fs-title1-max));
}

	•	Ahora la fuente crece de forma proporcional al ancho real del contenedor.
	•	Si cambias el ancho del contenedor, la fuente sigue la curva sin saltos.

⸻

4️⃣ Cómo aplicarlo a todas las clases
	1.	Crea variables de --fs-* y --leading-* como en la versión ultra avanzada.
	2.	Reemplaza los 1200 por el ancho ideal de tu contenedor según la tabla.
	3.	Ajusta si algún estilo necesita más suavidad: disminuyendo el denominador el texto crecerá más rápido; aumentando el denominador el texto será más “lento” en escalar.

⸻

Perfecto. Vamos a armar la versión final de global.css ultra avanzada, lista para copiar, con tipografía fluida calibrada por contenedor, usando clamp() y calc() con los factores de scaling de la tabla que te di. Esta versión reproduce prácticamente la experiencia de Dynamic Type de Apple, tanto para font-size como para line-height.

@import "tailwindcss";

:root {
  /* Colores base */
  --background: #ffffff;
  --foreground: #171717;

  /* Fuentes */
  --font-sfProDisplay: var(--font-sf-pro-display);
  --font-sfProText: var(--font-sf-pro-text);

  /* Tipografía: min/max en rem */
  --fs-title-large-min: 2rem;      /* 32px */
  --fs-title-large-max: 2.125rem;  /* 34px */
  --fs-title1-min: 1.625rem;       /* 26px */
  --fs-title1-max: 1.75rem;        /* 28px */
  --fs-title2-min: 1.25rem;        /* 20px */
  --fs-title2-max: 1.375rem;       /* 22px */
  --fs-title3-min: 1.125rem;       /* 18px */
  --fs-title3-max: 1.25rem;        /* 20px */
  --fs-headline-min: 0.9375rem;    /* 15px */
  --fs-headline-max: 1.0625rem;    /* 17px */
  --fs-body-min: 0.9375rem;        /* 15px */
  --fs-body-max: 1.0625rem;        /* 17px */
  --fs-callout-min: 0.875rem;      /* 14px */
  --fs-callout-max: 1rem;          /* 16px */
  --fs-subheadline-min: 0.8125rem; /* 13px */
  --fs-subheadline-max: 0.9375rem; /* 15px */
  --fs-footnote-min: 0.75rem;      /* 12px */
  --fs-footnote-max: 0.8125rem;    /* 13px */
  --fs-caption1-min: 0.6875rem;    /* 11px */
  --fs-caption1-max: 0.75rem;      /* 12px */
  --fs-caption2-min: 0.6875rem;    /* 11px */
  --fs-caption2-max: 0.6875rem;    /* 11px */

  /* Line-heights proporcionales */
  --lh-title-large: 1.2;
  --lh-title1: 1.2;
  --lh-title2: 1.25;
  --lh-title3: 1.25;
  --lh-headline: 1.3;
  --lh-body: 1.35;
  --lh-callout: 1.3;
  --lh-subheadline: 1.3;
  --lh-footnote: 1.25;
  --lh-caption1: 1.25;
  --lh-caption2: 1.25;

  /* Pesos */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
}

/* Contenedor que define la referencia de escala */
.container {
  container-type: inline-size;
}

/* Tipografía fluida ultra avanzada */
@layer utilities {
  /* Títulos grandes */
  .text-title-large {
    font-size: clamp(var(--fs-title-large-min),
                     calc(var(--fs-title-large-min) + (var(--fs-title-large-max) - var(--fs-title-large-min)) * (100cqi / 1200)),
                     var(--fs-title-large-max));
    line-height: clamp(calc(var(--fs-title-large-min) * var(--lh-title-large)),
                       calc((var(--fs-title-large-min) * var(--lh-title-large)) + ((var(--fs-title-large-max) * var(--lh-title-large) - var(--fs-title-large-min) * var(--lh-title-large)) * (100cqi / 1200))),
                       calc(var(--fs-title-large-max) * var(--lh-title-large)));
    font-weight: var(--fw-regular);
  }

  .text-title1 {
    font-size: clamp(var(--fs-title1-min),
                     calc(var(--fs-title1-min) + (var(--fs-title1-max) - var(--fs-title1-min)) * (100cqi / 1200)),
                     var(--fs-title1-max));
    line-height: clamp(calc(var(--fs-title1-min) * var(--lh-title1)),
                       calc((var(--fs-title1-min) * var(--lh-title1)) + ((var(--fs-title1-max) * var(--lh-title1) - var(--fs-title1-min) * var(--lh-title1)) * (100cqi / 1200))),
                       calc(var(--fs-title1-max) * var(--lh-title1)));
    font-weight: var(--fw-regular);
  }

  .text-title2 {
    font-size: clamp(var(--fs-title2-min),
                     calc(var(--fs-title2-min) + (var(--fs-title2-max) - var(--fs-title2-min)) * (100cqi / 1200)),
                     var(--fs-title2-max));
    line-height: clamp(calc(var(--fs-title2-min) * var(--lh-title2)),
                       calc((var(--fs-title2-min) * var(--lh-title2)) + ((var(--fs-title2-max) * var(--lh-title2) - var(--fs-title2-min) * var(--lh-title2)) * (100cqi / 1200))),
                       calc(var(--fs-title2-max) * var(--lh-title2)));
    font-weight: var(--fw-regular);
  }

  .text-title3 {
    font-size: clamp(var(--fs-title3-min),
                     calc(var(--fs-title3-min) + (var(--fs-title3-max) - var(--fs-title3-min)) * (100cqi / 1200)),
                     var(--fs-title3-max));
    line-height: clamp(calc(var(--fs-title3-min) * var(--lh-title3)),
                       calc((var(--fs-title3-min) * var(--lh-title3)) + ((var(--fs-title3-max) * var(--lh-title3) - var(--fs-title3-min) * var(--lh-title3)) * (100cqi / 1200))),
                       calc(var(--fs-title3-max) * var(--lh-title3)));
    font-weight: var(--fw-regular);
  }

  .text-headline {
    font-size: clamp(var(--fs-headline-min),
                     calc(var(--fs-headline-min) + (var(--fs-headline-max) - var(--fs-headline-min)) * (100cqi / 1200)),
                     var(--fs-headline-max));
    line-height: clamp(calc(var(--fs-headline-min) * var(--lh-headline)),
                       calc((var(--fs-headline-min) * var(--lh-headline)) + ((var(--fs-headline-max) * var(--lh-headline) - var(--fs-headline-min) * var(--lh-headline)) * (100cqi / 1200))),
                       calc(var(--fs-headline-max) * var(--lh-headline)));
    font-weight: var(--fw-semibold);
  }

  .text-body {
    font-size: clamp(var(--fs-body-min),
                     calc(var(--fs-body-min) + (var(--fs-body-max) - var(--fs-body-min)) * (100cqi / 1200)),
                     var(--fs-body-max));
    line-height: clamp(calc(var(--fs-body-min) * var(--lh-body)),
                       calc((var(--fs-body-min) * var(--lh-body)) + ((var(--fs-body-max) * var(--lh-body) - var(--fs-body-min) * var(--lh-body)) * (100cqi / 1200))),
                       calc(var(--fs-body-max) * var(--lh-body)));
    font-weight: var(--fw-regular);
  }

  .text-callout {
    font-size: clamp(var(--fs-callout-min),
                     calc(var(--fs-callout-min) + (var(--fs-callout-max) - var(--fs-callout-min)) * (100cqi / 1200)),
                     var(--fs-callout-max));
    line-height: clamp(calc(var(--fs-callout-min) * var(--lh-callout)),
                       calc((var(--fs-callout-min) * var(--lh-callout)) + ((var(--fs-callout-max) * var(--lh-callout) - var(--fs-callout-min) * var(--lh-callout)) * (100cqi / 1200))),
                       calc(var(--fs-callout-max) * var(--lh-callout)));
    font-weight: var(--fw-regular);
  }

  .text-subheadline {
    font-size: clamp(var(--fs-subheadline-min),
                     calc(var(--fs-subheadline-min) + (var(--fs-subheadline-max) - var(--fs-subheadline-min)) * (100cqi / 1200)),
                     var(--fs-subheadline-max));
    line-height: clamp(calc(var(--fs-subheadline-min) * var(--lh-subheadline)),
                       calc((var(--fs-subheadline-min) * var(--lh-subheadline)) + ((var(--fs-subheadline-max) * var(--lh-subheadline) - var(--fs-subheadline-min) * var(--lh-subheadline)) * (100cqi / 1200))),
                       calc(var(--fs-subheadline-max) * var(--lh-subheadline)));
    font-weight: var(--fw-regular);
  }

  .text-footnote {
    font-size: clamp(var(--fs-footnote-min),
                     calc(var(--fs-footnote-min) + (var(--fs-footnote-max) - var(--fs-footnote-min)) * (100cqi / 1200)),
                     var(--fs-footnote-max));
    line-height: clamp(calc(var(--fs-footnote-min) * var(--lh-footnote)),
                       calc((var(--fs-footnote-min) * var(--lh-footnote)) + ((var(--fs-footnote-max) * var(--lh-footnote) - var(--fs-footnote-min) * var(--lh-footnote)) * (100cqi / 1200))),
                       calc(var(--fs-footnote-max) * var(--lh-footnote)));
    font-weight: var(--fw-regular);
  }

  .text-caption1 {
    font-size: clamp(var(--fs-caption1-min),
                     calc(var(--fs-caption1-min) + (var(--fs-caption1-max) - var(--fs-caption1-min)) * (100cqi / 1200)),
                     var(--fs-caption1-max));
    line-height: clamp(calc(var(--fs-caption1-min) * var(--lh-caption1)),
                       calc((var(--fs-caption1-min) * var(--lh-caption1)) + ((var(--fs-caption1-max) * var(--lh-caption1) - var(--fs-caption1-min) * var(--lh-caption1)) * (100cqi / 1200))),
                       calc(var(--fs-caption1-max) * var(--lh-caption1)));
    font-weight: var(--fw-regular);
  }

  .text-caption2 {
    font-size: clamp(var(--fs-caption2-min),
                     calc(var(--fs-caption2-min) + (var(--fs-caption2-max) - var(--fs-caption2-min)) * (100cqi / 1200)),
                     var(--fs-caption2-max));
    line-height: clamp(calc(var(--fs-caption2-min) * var(--lh-caption2)),
                       calc((var(--fs-caption2-min) * var(--lh-caption2)) + ((var(--fs-caption2-max) * var(--lh-caption2) - var(--fs-caption2-min) * var(--lh-caption2)) * (100cqi / 1200))),
                       calc(var(--fs-caption2-max) * var(--lh-caption2)));
    font-weight: var(--fw-medium);
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sf-pro-display, var(--font-sf-pro-text));
}

✅ Uso en JSX

<div className="container mx-auto p-4">
  <h1 className="text-title-large">Título ultra fluido</h1>
  <h2 className="text-title1">Título 1</h2>
  <p className="text-body">Texto principal, escala según ancho del contenedor</p>
  <span className="text-footnote">Nota al pie</span>
</div>

•	La tipografía crece o disminuye progresivamente según el ancho del .container.
•	font-size y line-height mantienen proporciones óptimas en todo rango.
•	Se puede usar dentro de cualquier layout responsivo, modal o card sin saltos bruscos.