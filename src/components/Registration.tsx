{/* ===============================================
    RIGHT VISUAL - GHZ STATE PREPARATION
=============================================== */}

<div
  className="
    relative
    hidden
    min-h-[500px]
    overflow-hidden
    border-l
    border-border
    bg-muted/20
    md:flex
    md:items-center
    md:justify-center
  "
>

  {/* Subtle background grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]
      [background-size:32px_32px]
    "
  />

  {/* Circuit container */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="
      relative
      w-full
      max-w-[470px]
      px-8
    "
  >

    {/* Small circuit label */}
    <div className="mb-8 flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />

      <span
        className="
          font-mono
          text-[9px]
          font-semibold
          tracking-[0.25em]
          text-primary
        "
      >
        GHZ STATE PREPARATION
      </span>
    </div>


    {/* Circuit */}
    <div
      className="
        rounded-2xl
        border
        border-border/70
        bg-background/70
        px-6
        py-8
        shadow-xl
        backdrop-blur-sm
      "
    >

      {/* q0 */}
      <div className="relative flex h-16 items-center">

        {/* Qubit label */}
        <div
          className="
            w-12
            shrink-0
            font-mono
            text-sm
            font-medium
            text-foreground
          "
        >
          q₀
        </div>

        {/* Wire */}
        <div className="relative flex flex-1 items-center">

          <div
            className="
              absolute
              left-0
              right-0
              h-px
              bg-border
            "
          />

          {/* H gate */}
          <div
            className="
              relative
              ml-4
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-md
              border
              border-primary/50
              bg-primary/[0.08]
              font-serif
              text-lg
              text-primary
            "
          >
            H
          </div>

          {/* Connection point */}
          <div className="relative ml-12 h-4 w-4 shrink-0 rounded-full bg-primary" />

          {/* Horizontal space */}
          <div className="flex-1" />

        </div>
      </div>


      {/* q1 */}
      <div className="relative flex h-16 items-center">

        {/* Qubit label */}
        <div
          className="
            w-12
            shrink-0
            font-mono
            text-sm
            font-medium
            text-foreground
          "
        >
          q₁
        </div>

        {/* Wire */}
        <div className="relative flex flex-1 items-center">

          <div
            className="
              absolute
              left-0
              right-0
              h-px
              bg-border
            "
          />

          {/* Vertical CNOT connection */}
          <div
            className="
              absolute
              left-[124px]
              top-[-32px]
              h-16
              w-px
              bg-primary
            "
          />

          {/* CNOT target */}
          <div
            className="
              absolute
              left-[116px]
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-primary
              bg-background
            "
          >
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>

        </div>
      </div>


      {/* q2 */}
      <div className="relative flex h-16 items-center">

        {/* Qubit label */}
        <div
          className="
            w-12
            shrink-0
            font-mono
            text-sm
            font-medium
            text-foreground
          "
        >
          q₂
        </div>

        {/* Wire */}
        <div className="relative flex flex-1 items-center">

          <div
            className="
              absolute
              left-0
              right-0
              h-px
              bg-border
            "
          />

          {/* Vertical CNOT connection */}
          <div
            className="
              absolute
              left-[220px]
              top-[-32px]
              h-16
              w-px
              bg-primary
            "
          />

          {/* CNOT target */}
          <div
            className="
              absolute
              left-[212px]
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-primary
              bg-background
            "
          >
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>

        </div>
      </div>


      {/* CNOT control markers */}
      <div
        className="
          pointer-events-none
          absolute
          left-[166px]
          top-[104px]
          h-4
          w-4
          rounded-full
          bg-primary
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[262px]
          top-[104px]
          h-4
          w-4
          rounded-full
          bg-primary
        "
      />

    </div>


    {/* Mathematical output */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="mt-7 text-center"
    >

      <div
        className="
          font-serif
          text-lg
          text-foreground
        "
      >
        <span className="text-primary">|GHZ₃⟩</span>
        {" = "}
        <span>
          <span className="opacity-80">1</span>
          <span className="text-primary">/√2</span>
        </span>
        <span className="mx-2 opacity-60">(</span>
        <span>|000⟩ + |111⟩</span>
        <span className="opacity-60">)</span>
      </div>

      <p
        className="
          mt-3
          font-mono
          text-[9px]
          tracking-[0.18em]
          text-muted-foreground
        "
      >
        THREE QUBITS · MAXIMAL ENTANGLEMENT
      </p>

    </motion.div>


    {/* Bottom identifier */}
    <div
      className="
        mt-8
        flex
        items-center
        justify-between
        font-mono
        text-[8px]
        tracking-[0.18em]
        text-muted-foreground/50
      "
    >
      <span>QFF_2026</span>
      <span>Q₃ → |GHZ₃⟩</span>
    </div>

  </motion.div>

</div>
