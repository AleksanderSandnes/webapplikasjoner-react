import React from 'react';
import { shallow, mount } from 'enzyme';
import { ingenResultat } from '../src/komponenter/ingenResultat';

it('Inneholder den kode "404"?', () => {
    const wrap = shallow(<ingenResultat />);
    expect(wrap.text()).toContain('404');
});