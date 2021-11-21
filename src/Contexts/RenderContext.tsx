import { Component, createContext } from "react";

type Mode = "About-me" | "qualifications" | "projects" | "contact" 

interface State {
  mode: Mode
}

interface ContextProps extends State {
  handleNavigation: (mode: Mode) => void;
}

export const RenderContext = createContext<ContextProps>({
  mode: 'About-me', 
  handleNavigation: (mode: Mode) => {}
});

class RenderProvider extends Component<{}, State> {
  state: State = {
    mode: 'About-me'
  };

  handleNavigationState = (mode: Mode) => {
    this.setState({mode: mode})
  }

  componentDidMount() { 
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <RenderContext.Provider
        value={{
          ...this.state,
          handleNavigation: this.handleNavigationState,
        }}
      >
        {this.props.children}
      </RenderContext.Provider>
    );
  }
}

export default RenderProvider;