require 'spec_helper'

describe HomeController do
  it "renders the index template" do
    get :index
    response.should render_template("index")
  end
end
