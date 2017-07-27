/* global jest expect */

import React from 'react';
import { shallow } from 'enzyme';
import { SearchDocuments } from '../../components/documents/SearchDocuments';

describe('Search document component', () => {
  const props = {
    currentUser: {},
    searchDocuments: jest.fn()
  };
  const event = {
    preventDefault: jest.fn()
  };
  const wrapper = shallow(<SearchDocuments {...props} />);
  it('renders as a span', () => {
    expect(wrapper.node.type).toEqual('span');
  });

  const submitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
  wrapper.instance().onSubmit(event);
  expect(submitSpy).toHaveBeenCalledTimes(1);

  const spy = jest.spyOn(wrapper.instance(), 'onChange');
  wrapper.instance().onChange({
    target: {
      value: 'mayowa', name: 'searchQuery'
    }
  });
  expect(wrapper.state('searchQuery')).toEqual('mayowa');
  expect(spy).toHaveBeenCalledTimes(1);
});