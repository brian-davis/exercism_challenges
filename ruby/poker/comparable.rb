class MyClass
  include Comparable

  attr_accessor :n

  def initialize(n)
    @n = n
  end

  def <=>(other)
    self.n <=> other.n
  end
end

a = MyClass.new(1)
b = MyClass.new(2)
c = MyClass.new(3)

p [a, b, c].max
