describe "spy behavior", ->
  it "should spy on a static method of Klass", ->
    spyOn(Klass,'staticMethod')
    Klass.staticMethod('foo argument')  
    expect(Klass.staticMethod).toHaveBeenCalledWith('foo argument')