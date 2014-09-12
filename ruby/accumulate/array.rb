class Array
  def accumulate
    size.times.with_object([]) do |i, a|
      new_val = yield self[i]
      a << new_val
    end
  end

  def accumulate!
    size.times { |i| self[i] = yield self[i] }
    self
  end
end
