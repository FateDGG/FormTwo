import * as Yup from 'yup';

export const validationSchemaPage1 = Yup.object().shape({
    P1: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P2: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P3: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P4: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P5: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P6: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
});

export const validationSchemaPage2 = Yup.object().shape({
  P7: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P8: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
      })
    )
  }),
  P9: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P10: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(
          Yup.string().required('Campo obligatorio')
          .notOneOf([""], "Seleccionar una Opción válida")
          .notOneOf(["No"], "Debe aceptar si desea continuar la encuesta")
        )
      })
    )
  }),
  P11: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P12: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});

export const validationSchemaPage3 = Yup.object().shape({
  P13: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P14: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf([""], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P15: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});
export const validationSchemaPage4 = Yup.object().shape({
  P16a: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16b: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16c: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16d: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});
export const validationSchemaPage5 = Yup.object().shape({
  P16e: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16f: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16g: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
  P16h: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        idoptresponse: Yup.string()
          .required("Seleccione una categoría")
          .notOneOf(["s","16"], "Seleccionar una Opción válida"),
        responseuser: Yup.array().of(
          Yup.string().notRequired() // No obligatorio
        )
      })
    )
  }),
});