// ********************************
// Point d'entrée de l'application
// ********************************
//
// Ce fichier initialise l'application en réalisant les actions suivantes :
// - Importation de la méthode createRoot de ReactDOM pour créer la racine du DOM.
// - Importation du composant principal RouterApp, qui contient la configuration de la navigation et le rendu global.
// - Rendu du composant RouterApp dans l'élément HTML ayant l'ID "root".
//
import { createRoot } from 'react-dom/client'
import RouterApp from './Router'

createRoot(document.getElementById('root')).render(
  <RouterApp />
)
