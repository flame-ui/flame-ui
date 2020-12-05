import * as React from 'react'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  UnpackNestedValue,
  DeepPartial,
} from 'react-hook-form'

type FormProps<TFormValues> = {
  defaultValues?: UnpackNestedValue<DeepPartial<TFormValues>>
  onSubmit: SubmitHandler<TFormValues>
  children: React.ReactNode
}

export const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  defaultValues,
  children,
  onSubmit,
}: FormProps<TFormValues>): React.ReactElement => {
  const methods = useForm<TFormValues>({
    defaultValues,
  })

  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

Form.displayName = 'Form'
