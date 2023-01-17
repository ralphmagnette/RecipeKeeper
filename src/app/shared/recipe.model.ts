export class Recipe {
  emit(selectedRecipe: Recipe) {
    throw new Error('Method not implemented.');
  }
  constructor(public name: string, public description: string, public imagePath: string) {}
}
