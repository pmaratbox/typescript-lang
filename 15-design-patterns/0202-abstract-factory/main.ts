interface Button {
  label(): string;
}

interface Checkbox {
  label(): string;
}

interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class DarkFactory implements ThemeFactory {
  createButton(): Button {
    return { label: () => "dark-button" };
  }
  createCheckbox(): Checkbox {
    return { label: () => "dark-checkbox" };
  }
}

const factory: ThemeFactory = new DarkFactory();
const button = factory.createButton();
const checkbox = factory.createCheckbox();
console.log(`${button.label()} ${checkbox.label()}`);
