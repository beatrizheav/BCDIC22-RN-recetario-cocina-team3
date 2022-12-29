import App from '../screens/home';
import renderer from 'react-test-renderer';

test('nombre de la prueba', () => {
    const home = renderer.create(<App/>).toJSON()
    expect(tree).toMatchSnapshot()
});

