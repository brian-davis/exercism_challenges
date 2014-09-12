class Trinary
  attr_reader :trinary

  def initialize n
    @trinary = n
  end

  def to_decimal
    trinary.to_i.to_s.chars.map { |x| x.to_i }.reverse
    .each.with_index.reduce(0) do|sum, (digit, index)|
      sum + digit * 3**index
    end
  end
end
