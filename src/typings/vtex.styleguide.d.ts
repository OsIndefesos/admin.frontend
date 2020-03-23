declare module "@vtex/styleguide/lib/Button" {
  type Props = {
    loading?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };

  const Button: React.FC<Props>;

  export = Button;
}

declare module "@vtex/styleguide/lib/Input*" {
  type Props = {
    errorMessage?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    ref?: MutableRefObject<HTMLInputElement | undefined>;
    value?: string;
  };

  const Input: React.FC<Props>;

  export = Input;
}

declare module "@vtex/styleguide/lib/*" {
  const StyleguideComponent: React.FC<any>;
  export = StyleguideComponent;
}
