import { v4 as uuid } from 'uuid';
export const articles = [
    {
      id: uuid(),
      createdAt: '27/08/2022',
      description: 'Sénat : Le passé colonial entre la RDC et la Belgique au cœur d\'un échange entre le 1er vice-président et une délégation parlementaire belge ',
      media: '/images/senat.JPG',
      contents: "",
      title: 'Senat',
      nbVues: '50k'
    },
    {
        id: uuid(),
        createdAt: '27/08/2022',
        description: 'Affaire 21.000 $ : La VSV demande au gouvernement de publier les salaires et émoluments payés aux gouvernants et autres mandataires publics.',
        media: '/images/vsv.JPEG',
        contents: "",
        title: 'Affaire 21.000$',
        nbVues: '23k'
    },
    {
        id: uuid(),
        createdAt: '27/08/2022',
        description: 'Kinshasa - Exetat 2022 : Voici la liste de tous les lauréats de la Lukunga.',
        media: '/images/exetat.JPEG',
        contents: "",
        title: 'Exetat',
        nbVues: '5M'
      },
      {
        id: uuid(),
        createdAt: '27/08/2022',
        description: 'RDC - Miba : Initiateur de la campagne "Ensemble sauvons la Miba", l\’économiste Dany Mukendi brosse en 7 points son Plan de relance',
        media: '/images/miba.JPEG',
        contents: "",
        title: 'Miba',
        nbVues: '5M'
      },
] 