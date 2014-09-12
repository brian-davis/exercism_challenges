class Array
  def keep # re-implemtent .keep_if
    each_with_object([]) { |e, a| a << e if yield e }
  end

  def discard # re-implemtent .delete_if
    each_with_object(dup) { |e, a| a.delete e if yield e }
  end
end
