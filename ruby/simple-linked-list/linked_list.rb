class Element
  attr_reader :datum, :next
  def initialize *args
    @datum = args[0]
    @next = args[1]
  end

  def self.to_a el
    d = el.datum if el
    x = el.next.datum if el && el.next
    [d, x].compact
  end

  def reverse
    @datum = if @next
               @next.datum
             else
               @datum
             end
    @next = @datum
    self
  end
end
