import * as Yup from 'yup';

export const musicAddSchema = Yup.object({
  musicName: Yup.string().required('Campo obrigatório!'),
  musicCreator: Yup.string().required('Campo obrigatório!'),
  musicGenre: Yup.string().required('Campo obrigatório!'),
});
