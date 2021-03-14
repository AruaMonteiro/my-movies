class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :director, :synopsis, :year, :rate
end
